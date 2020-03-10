var Pulse = pc.createScript('pulse');
Pulse.attributes.add('event_name', { type: 'string' });
Pulse.attributes.add('event_name2', { type: 'string' });
Pulse.attributes.add("pulseTimeSecs", {type: "number", default: 2, title: "Pulse Time Secs"});

// initialize code called once per entity
Pulse.prototype.initialize = function() {
    this.secsSinceStart = this.pulseTimeSecs + 1;
    this.entity.on("pulse:start", this.onStartEvent, this);
    this.on('destroy', function() {
        this.entity.off("pulse:start", this.onStartEvent);
     });
};

// update code called every frame
Pulse.prototype.update = function(dt) {
    this.secsSinceStart += dt; 
    
    if (this.secsSinceStart <= this.pulseTimeSecs) {
        var normalisedTime = this.secsSinceStart / this.pulseTimeSecs;
        var pingPongTime = Math.abs(normalisedTime -0.5) * 2;
        var scale = (0.3 * pingPongTime) + 0.7;
        var localScale = this.entity.getLocalScale();
        localScale.set(scale, scale, scale);
        this.entity.setLocalScale(localScale);
    }
};

Pulse.prototype.onStartEvent = function() {
    this.secsSinceStart = 0;
    var self = this;
    self.app.fire(self.event_name, self.event_name);
    self.app.fire(self.event_name2, self.event_name2);
};
